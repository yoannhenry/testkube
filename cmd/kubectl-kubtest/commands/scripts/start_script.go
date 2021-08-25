package scripts

import (
	"fmt"
	"time"

	"github.com/kubeshop/kubtest/pkg/ui"
	"github.com/spf13/cobra"
)

const WatchInterval = 2 * time.Second

var params map[string]string

func init() {
	StartScriptCmd.Flags().StringP("name", "n", "", "execution name, if empty will be autogenerated")
	StartScriptCmd.Flags().StringToStringVarP(&params, "param", "p", map[string]string{}, "execution envs passed to executor")
}

var StartScriptCmd = &cobra.Command{
	Use:     "start",
	Aliases: []string{"run"},
	Short:   "Starts new script",
	Long:    `Starts new script based on Script Custom Resource name, returns results to console`,
	Run: func(cmd *cobra.Command, args []string) {
		ui.Logo()

		if len(args) == 0 {
			ui.ExitOnError("Invalid arguments", fmt.Errorf("please pass script name to run"))
		}

		scriptID := args[0]
		name := cmd.Flag("name").Value.String()
		namespace := cmd.Flag("namespace").Value.String()
		namespacedName := fmt.Sprintf("%s/%s", namespace, scriptID)

		client := GetClient(cmd)

		scriptExecution, err := client.ExecuteScript(scriptID, namespace, name, params)
		ui.ExitOnError("starting script execution "+namespacedName, err)

		execution := scriptExecution.Execution

		switch true {

		case execution.IsQueued():
			ui.Warn("Script queued for execution")

		case execution.IsPending():
			ui.Warn("Script execution started")

		case execution.IsSuccesful():
			fmt.Println(execution.Result.RawOutput)
			duration := execution.EndTime.Sub(execution.StartTime)
			ui.Success("Script execution completed with sucess in " + duration.String())

		case execution.IsFailed():
			fmt.Println(execution.Result.ErrorMessage)
			ui.Errf("Script execution failed")

		}

		ui.BR()
		ui.ShellCommand(
			"Use following command to get script execution details",
			"kubectl kubtest scripts execution "+scriptExecution.Id,
		)
		ui.ShellCommand(
			"or watch script execution until complete",
			"kubectl kubtest scripts watch "+scriptExecution.Id,
		)

	},
}
