package context

import (
	"github.com/spf13/cobra"

	"github.com/kubeshop/testkube/cmd/kubectl-testkube/commands/common"
	"github.com/kubeshop/testkube/cmd/kubectl-testkube/config"
	"github.com/kubeshop/testkube/pkg/ui"
)

func NewSetContextCmd() *cobra.Command {
	var (
		org, env, apiKey, apiUri string
		agentKey, agentUri       string
		kubeconfig               bool
	)

	cmd := &cobra.Command{
		Use:   "context <value>",
		Short: "Set context data for Testkube Cloud",
		Run: func(cmd *cobra.Command, args []string) {

			cfg, err := config.Load()
			ui.ExitOnError("loading config file", err)

			if kubeconfig {
				cfg.ContextType = config.ContextTypeKubeconfig
			} else {
				cfg.ContextType = config.ContextTypeCloud
			}

			switch cfg.ContextType {
			case config.ContextTypeCloud:
				if org == "" && env == "" && apiKey == "" && agentKey == "" && agentUri == "" && apiUri == "" {
					ui.Errf("Please provide at least one of the following flags: --org, --env, --api-key, --cloud-api-uri, --cloud-agent-key, --cloud-agent-uri")
				}

				if org != "" {
					cfg.CloudContext.Organization = org
					// reset env when the org is changed
					if env == "" {
						cfg.CloudContext.Environment = ""
					}
				}
				if env != "" {
					cfg.CloudContext.Environment = env
				}
				if apiKey != "" {
					cfg.CloudContext.ApiKey = apiKey
				}
				if apiUri != "" {
					cfg.CloudContext.ApiUri = apiUri
				}

			case config.ContextTypeKubeconfig:
				// kubeconfig special use cases

			default:
				ui.Errf("Unknown context type: %s", cfg.ContextType)
			}

			err = config.Save(cfg)
			ui.ExitOnError("saving config file", err)

			ui.Success("Your config was updated with new values")
			ui.NL()
			common.UiPrintContext(cfg)
		},
	}

	cmd.Flags().BoolVarP(&kubeconfig, "kubeconfig", "", false, "reset context mode for CLI to default kubeconfig based")
	cmd.Flags().StringVarP(&org, "org", "o", "", "Testkube Cloud Organization ID")
	cmd.Flags().StringVarP(&env, "env", "e", "", "Testkube Cloud Environment ID")
	cmd.Flags().StringVarP(&apiKey, "api-key", "k", "", "API Key for Testkube Cloud")
	cmd.Flags().StringVarP(&apiUri, "cloud-api-uri", "", "https://api.testkube.io", "Testkube Cloud API URI - defaults to api.testksube.io")

	return cmd
}
