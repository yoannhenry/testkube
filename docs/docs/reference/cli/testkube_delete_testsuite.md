## testkube delete testsuite

Delete test suite

### Synopsis

Delete test suite by name

```
testkube delete testsuite <testSuiteName> [flags]
```

### Options

```
      --all             Delete all tests
  -h, --help            help for testsuite
  -l, --label strings   label key value pair: --label key1=value1
```

### Options inherited from parent commands

```
  -a, --api-uri string     api uri, default value read from config if set (default "http://localhost:8088")
  -c, --client string      Client used for connecting to testkube API one of proxy|direct (default "proxy")
      --namespace string   Kubernetes namespace, default value read from config if set (default "testkube")
      --oauth-enabled      enable oauth
      --verbose            should I show additional debug messages
```

### SEE ALSO

* [testkube delete](testkube_delete.md)	 - Delete resources

