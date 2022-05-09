/*
 * Testkube API
 *
 * Testkube provides a Kubernetes-native framework for test definition, execution and results
 *
 * API version: 1.0.0
 * Contact: testkube@kubeshop.io
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */
package testkube

// test execution request body
type ExecutionRequest struct {
	// test execution custom name
	Name string `json:"name,omitempty"`
	// test kubernetes namespace (\"testkube\" when not set)
	Namespace string `json:"namespace,omitempty"`
	// variables file content - need to be in format for particular executor (e.g. postman envs file)
	VariablesFile string              `json:"variablesFile,omitempty"`
	Variables     map[string]Variable `json:"variables,omitempty"`
	// additional executor binary arguments
	Args []string `json:"args,omitempty"`
	// execution variables passed to executor from secrets
	SecretEnvs map[string]string `json:"secretEnvs,omitempty"`
	// whether to start execution sync or async
	Sync bool `json:"sync,omitempty"`
}
