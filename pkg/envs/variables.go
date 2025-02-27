package envs

import (
	"fmt"

	"github.com/kelseyhightower/envconfig"

	"github.com/kubeshop/testkube/pkg/executor/output"
	"github.com/kubeshop/testkube/pkg/ui"
)

// Params are the environment variables provided by the Testkube api-server
type Params struct {
	Endpoint            string // RUNNER_ENDPOINT
	AccessKeyID         string // RUNNER_ACCESSKEYID
	SecretAccessKey     string // RUNNER_SECRETACCESSKEY
	Location            string // RUNNER_LOCATION
	Token               string // RUNNER_TOKEN
	Bucket              string // RUNNER_BUCKET
	Ssl                 bool   // RUNNER_SSL
	ScrapperEnabled     bool   // RUNNER_SCRAPPERENABLED
	DataDir             string // RUNNER_DATADIR
	GitUsername         string // RUNNER_GITUSERNAME
	GitToken            string // RUNNER_GITTOKEN
	CloudMode           bool   `envconfig:"RUNNER_CLOUD_MODE"`             // RUNNER_CLOUD_MODE
	CloudAPIKey         string `envconfig:"RUNNER_CLOUD_API_KEY"`          // RUNNER_CLOUD_API_KEY
	CloudAPITLSInsecure bool   `envconfig:"RUNNER_CLOUD_API_TLS_INSECURE"` // RUNNER_CLOUD_API_TLS_INSECURE
	CloudAPIURL         string `envconfig:"RUNNER_CLOUD_API_URL"`          // RUNNER_CLOUD_API_URL
}

// LoadTestkubeVariables loads the parameters provided as environment variables in the Test CRD
func LoadTestkubeVariables() (Params, error) {
	var params Params
	output.PrintLog(fmt.Sprintf("%s Reading environment variables...", ui.IconWorld))
	err := envconfig.Process("runner", &params)
	if err != nil {
		output.PrintLog(fmt.Sprintf("%s Failed to read environment variables: %s", ui.IconCross, err.Error()))
		return params, fmt.Errorf("failed to read environment variables: %w", err)
	}
	output.PrintLog(fmt.Sprintf("%s Environment variables read successfully", ui.IconCheckMark))
	printParams(params)

	return params, nil
}

// printParams shows the read parameters in logs
func printParams(params Params) {
	output.PrintLog(fmt.Sprintf("RUNNER_ENDPOINT=\"%s\"", params.Endpoint))
	printSensitiveParam("RUNNER_ACCESSKEYID", params.AccessKeyID)
	printSensitiveParam("RUNNER_SECRETACCESSKEY", params.SecretAccessKey)
	output.PrintLog(fmt.Sprintf("RUNNER_LOCATION=\"%s\"", params.Location))
	printSensitiveParam("RUNNER_TOKEN", params.Token)
	output.PrintLog(fmt.Sprintf("RUNNER_BUCKET=\"%s\"", params.Bucket))
	output.PrintLog(fmt.Sprintf("RUNNER_SSL=%t", params.Ssl))
	output.PrintLog(fmt.Sprintf("RUNNER_SCRAPPERENABLED=\"%t\"", params.ScrapperEnabled))
	output.PrintLog(fmt.Sprintf("RUNNER_GITUSERNAME=\"%s\"", params.GitUsername))
	printSensitiveParam("RUNNER_GITTOKEN", params.GitToken)
	output.PrintLog(fmt.Sprintf("RUNNER_DATADIR=\"%s\"", params.DataDir))
	output.PrintLog(fmt.Sprintf("RUNNER_CLOUD_MODE=\"%t\"", params.CloudMode))
	output.PrintLog(fmt.Sprintf("RUNNER_CLOUD_API_TLS_INSECURE=\"%t\"", params.CloudAPITLSInsecure))
	output.PrintLog(fmt.Sprintf("RUNNER_CLOUD_API_URL=\"%s\"", params.CloudAPIURL))
	printSensitiveParam("RUNNER_CLOUD_API_KEY", params.CloudAPIKey)
}

// printSensitiveParam shows in logs if a parameter is set or not
func printSensitiveParam(name string, value string) {
	if len(value) == 0 {
		output.PrintLog(fmt.Sprintf("%s=\"\"", name))
	} else {
		output.PrintLog(fmt.Sprintf("%s=\"********\"", name))
	}
}
