"use strict";(self.webpackChunktestkube_documentation=self.webpackChunktestkube_documentation||[]).push([[6272],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=l(n),d=r,k=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return n?a.createElement(k,s(s({ref:t},u),{},{components:n})):a.createElement(k,s({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},66131:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={},s="What is a Container Executor?",i={unversionedId:"test-types/container-executor",id:"test-types/container-executor",title:"What is a Container Executor?",description:"The Testkube Container Executor allows you to run your own container images for executing tests. Testkube orchestrates the Tests using the container image as Kubernetes Jobs.",source:"@site/docs/test-types/container-executor.md",sourceDirName:"test-types",slug:"/test-types/container-executor",permalink:"/testkube/test-types/container-executor",draft:!1,editUrl:"https://github.com/kubeshop/testkube/docs/docs/test-types/container-executor.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Custom Testkube Executor",permalink:"/testkube/test-types/executor-custom"},next:{title:"Intro",permalink:"/testkube/testkube-cloud/intro"}},c={},l=[{value:"Input Data",id:"input-data",level:2},{value:"Collecting test artifacts",id:"collecting-test-artifacts",level:2}],u={toc:l};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"what-is-a-container-executor"},"What is a Container Executor?"),(0,r.kt)("p",null,"The Testkube Container Executor allows you to run your own container images for executing tests. Testkube orchestrates the Tests using the container image as Kubernetes Jobs."),(0,r.kt)("p",null,"The Test execution fails if the container exits with an error and succeeds when the container command successfully executes."),(0,r.kt)("p",null,"In order to use the Container Executor, create a new executor with ",(0,r.kt)("inlineCode",{parentName:"p"},"executor_type: container")," and your custom type. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: executor.testkube.io/v1\nkind: Executor\nmetadata:\n  name: curl-container-executor\n  namespace: testkube\nspec:\n  image: curlimages/curl:7.85.0\n  command: ["curl"]\n  executor_type: container\n  imagePullSecrets:\n    - name: secret-name\n  types:\n  - curl-container/test\n')),(0,r.kt)("p",null,"In the above example, all Tests of ",(0,r.kt)("inlineCode",{parentName:"p"},"curl-container/test")," will be executed by this Executor. Then you can create a new test that uses this Executor:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: tests.testkube.io/v3\nkind: Test\nmetadata:\n  name: test-website\n  namespace: testkube\nspec:\n  type: curl-container/test\n  executionRequest:\n    args:\n    - https://testkube.kubeshop.io/\n    variables:\n      TESTKUBE_ENV:\n        name: TESTKUBE_ENV\n        value: example\n")),(0,r.kt)("p",null,"Executing this test will run a Kubernetes Job with:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"curlimages/curl:7.85.0")," image"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"secret-name")," image pull secret"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"curl")," command"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"https://testkube.kubeshop.io/")," argument")),(0,r.kt)("p",null,"You can provide image, args, command, and image pull secrets in the HTTP Request, Test Spec, and Executor spec. The container executor merges all the data using the following order:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"HTTP Request."),(0,r.kt)("li",{parentName:"ol"},"Test.Spec.ExecutionRequest fields are used if they are not filled before."),(0,r.kt)("li",{parentName:"ol"},"Executor.Spec fields are used if they are not filled before.")),(0,r.kt)("h2",{id:"input-data"},"Input Data"),(0,r.kt)("p",null,"You can provide input data via string, files, and Git repositories via Testkube Dashboard. The data is downloaded into ",(0,r.kt)("inlineCode",{parentName:"p"},"/data")," before the test is run using Kubernetes Init container. When using ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," type, the content is put into ",(0,r.kt)("inlineCode",{parentName:"p"},"/data/test-content")," file. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: tests.testkube.io/v3\nkind: Test\nmetadata:\n  name: custom-container\n  namespace: testkube\nspec:\n  content:\n    data: |-\n      {\n        "project": "testkube",\n        "is": "awesome"\n      }\n    type: string\n  type: custom-container/test\n')),(0,r.kt)("p",null,"Puts data into ",(0,r.kt)("inlineCode",{parentName:"p"},"/data/test-content")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ cat /data/test-content\n{\n  "project": "testkube",\n  "is": "awesome"\n}\n')),(0,r.kt)("p",null,"When using Git or Git directory sources, the content is placed inside ",(0,r.kt)("inlineCode",{parentName:"p"},"/data/repo")," directory. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: tests.testkube.io/v3\nkind: Test\nmetadata:\n  name: custom-container\n  namespace: testkube\nspec:\n  content:\n    repository:\n      branch: main\n      type: git-dir\n      uri: https://github.com/kubeshop/testkube-executor-init\n    type: git-dir\n")),(0,r.kt)("p",null,"Downloads into ",(0,r.kt)("inlineCode",{parentName:"p"},"/data/repo")," directory"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ ls /data/repO\nCODE_OF_CONDUCT.md  CONTRIBUTING.md  LICENSE  Makefile  README.md  build  cmd  go.mod  go.sum  pkg\n")),(0,r.kt)("h2",{id:"collecting-test-artifacts"},"Collecting test artifacts"),(0,r.kt)("p",null,"For container executors that produce files during test execution we support collecting (scraping) these artifacts and storing them in our S3 compatible file storage. You need to save test related files into specified directories on the dynamically created volume, they will be uploaded from there to Testkube file storage and available later for downloading using standard Testkube CLI or Testkube Dashboard commands. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: tests.testkube.io/v3\nkind: Test\nmetadata:\n  name: cli-container\n  namespace: testkube\nspec:\n  type: cli/container\n  executionRequest:\n    artifactRequest:\n      storageClassName: standard\n      volumeMountPath: /share\n      dirs:\n      - test/reports\n")),(0,r.kt)("p",null,"You have to define the storage class name, volume mount path and directories in this volume with test artifacts.\nMake sure your container executor definition has ",(0,r.kt)("inlineCode",{parentName:"p"},"artifacts")," feature. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: executor.testkube.io/v1\nkind: Executor\nmetadata:\n  name: cli-container-executor\n  namespace: testkube\nspec:\n  types:\n  - cli/container\n  executor_type: container\n  image: soleware/nx-cli:8.5.2\n  command:\n  - /bin/bash\n  - -c\n  - pwd; echo 'Change dir to /share'; cd /share; echo 'create test/reports'; mkdir -p test/reports; echo 'test data' > test/reports/result.txt\n  features:\n  - artifacts\n\n")),(0,r.kt)("p",null,"Run your test using CLI command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl testkube run test cli-container\n")),(0,r.kt)("p",null,"Then get available artifacts for your test execution id:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl testkube get artifact 638a08b94ff1d2c694aeebf2\n")),(0,r.kt)("p",null,"Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"  NAME       | SIZE (KB)  \n-------------+------------\n  result.txt |        10  \n")))}p.isMDXComponent=!0}}]);