"use strict";(self.webpackChunktestkube_documentation=self.webpackChunktestkube_documentation||[]).push([[152],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(a),d=l,b=m["".concat(o,".").concat(d)]||m[d]||k[d]||r;return a?n.createElement(b,s(s({ref:t},p),{},{components:a})):n.createElement(b,s({ref:t},p))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,s=new Array(r);s[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:l,s[1]=i;for(var u=2;u<r;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},60681:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>k,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var n=a(87462),l=(a(67294),a(3905));const r={},s="Installation",i={unversionedId:"getting-started/installation",id:"getting-started/installation",title:"Installation",description:"In this section you will:",source:"@site/docs/getting-started/installation.md",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/getting-started/installation",draft:!1,editUrl:"https://github.com/kubeshop/testkube/docs/docs/getting-started/installation.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Does Testkube replace my CI/CD?",permalink:"/overview/does-testkube-replace-cicd"},next:{title:"Testkube Quickstart",permalink:"/getting-started/quickstart"}},o={},u=[{value:"1. Installing the Testkube CLI",id:"1-installing-the-testkube-cli",level:2},{value:"MacOS",id:"macos",level:4},{value:"Windows",id:"windows",level:4},{value:"Ubuntu/Debian",id:"ubuntudebian",level:4},{value:"Script Installation",id:"script-installation",level:4},{value:"Manual Download",id:"manual-download",level:4},{value:"2.a Using Testkube&#39;s CLI to Deploy the Server Components",id:"2a-using-testkubes-cli-to-deploy-the-server-components",level:3},{value:"2.b Using Helm to Deploy the Server Components",id:"2b-using-helm-to-deploy-the-server-components",level:3},{value:"Helm Properties",id:"helm-properties",level:4},{value:"Uninstall Testkube",id:"uninstall-testkube",level:2},{value:"Using Helm:",id:"using-helm",level:3},{value:"Using Testkube&#39;s CLI:",id:"using-testkubes-cli",level:3}],p={toc:u};function k(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"installation"},"Installation"),(0,l.kt)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/ynzEkOUhxKk",title:"YouTube Tutorial: Getting started with Testing in Kubernetes Using Testkube",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,l.kt)("p",null,"In this section you will:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Install the Testkube CLI,"),(0,l.kt)("li",{parentName:"ol"},"Use HELM or the Testkube CLI to install Testkube Server components in your cluster,"),(0,l.kt)("li",{parentName:"ol"},"(Optional) Configure Testkube's Dashboard UI Ingress for your ingress-controller, if needed.")),(0,l.kt)("p",null,"Watch the full installation video from our product experts: ",(0,l.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=bjQboi3Etys"},"Testkube Installation Video"),"."),(0,l.kt)("h2",{id:"1-installing-the-testkube-cli"},"1. Installing the Testkube CLI"),(0,l.kt)("p",null,"To install Testkube you'll need the following tools:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/"},"Kubectl"),", Kubernetes command-line tool"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://helm.sh/"},"Helm"))),(0,l.kt)("p",null,"Installing the Testkube CLI with Chocolatey and Homebrew will automatically install these dependencies if they are not present. For Linux-based systems please install them manually in advance."),(0,l.kt)("h4",{id:"macos"},"MacOS"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"brew install testkube\n")),(0,l.kt)("h4",{id:"windows"},"Windows"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"choco source add --name=kubeshop_repo --source=https://chocolatey.kubeshop.io/chocolatey  \nchoco install testkube -y\n")),(0,l.kt)("h4",{id:"ubuntudebian"},"Ubuntu/Debian"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'wget -qO - https://repo.testkube.io/key.pub | sudo apt-key add - && echo "deb https://repo.testkube.io/linux linux main" | sudo tee -a /etc/apt/sources.list && sudo apt-get update && sudo apt-get install -y testkube\n')),(0,l.kt)("h4",{id:"script-installation"},"Script Installation"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sSLf https://get.testkube.io | sh\n")),(0,l.kt)("h4",{id:"manual-download"},"Manual Download"),(0,l.kt)("p",null,"If you don't want to use scripts or package managers you can always do a manual install:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Download the binary for the version and platform of your choice ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/kubeshop/testkube/releases"},"here")),(0,l.kt)("li",{parentName:"ol"},"Unpack it. For example, in Linux use (tar -zxvf testkube_1.5.1_Linux_arm64.tar.gz)"),(0,l.kt)("li",{parentName:"ol"},"Move it to a location in the PATH. For example, ",(0,l.kt)("inlineCode",{parentName:"li"},"mv  testkube_0.6.5_Linux_arm64/kubectl-testkube /usr/local/bin/kubectl-testkube"),".")),(0,l.kt)("p",null,"For Windows, you will need to unpack the binary and add it to the ",(0,l.kt)("inlineCode",{parentName:"p"},"%PATH%")," as well."),(0,l.kt)("p",null,"If you use a package manager that we don't support, please let us know here ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/kubeshop/testkube/issues/161"},"#161"),"."),(0,l.kt)("p",null,"##*2. Installing Testkube Server Components**"),(0,l.kt)("p",null,"To deploy Testkube to your K8s cluster you will need the following packages installed:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/"},"Kubectl docs")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://helm.sh/docs/intro/install/#through-package-managers"},"Helm docs"))),(0,l.kt)("h3",{id:"2a-using-testkubes-cli-to-deploy-the-server-components"},"2.a Using Testkube's CLI to Deploy the Server Components"),(0,l.kt)("p",null,"The Testkube CLI provides a command to easily deploy the Testkube server components to your cluster.\nRun:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"testkube init\n")),(0,l.kt)("p",null,"note: you must have your KUBECONFIG pointing to the desired location of the installation."),(0,l.kt)("p",null,"The above command will install the following components in your Kubernetes cluster:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Testkube API"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"testkube")," namespace"),(0,l.kt)("li",{parentName:"ol"},"CRDs for Tests, TestSuites, Executors"),(0,l.kt)("li",{parentName:"ol"},"MongoDB"),(0,l.kt)("li",{parentName:"ol"},"Minio - default (can be disabled with ",(0,l.kt)("inlineCode",{parentName:"li"},"--no-minio"),")"),(0,l.kt)("li",{parentName:"ol"},"Dashboard - default (can be disabled with ",(0,l.kt)("inlineCode",{parentName:"li"},"--no-dashboard")," flag)")),(0,l.kt)("p",null,"Confirm that Testkube is running:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get all -n testkube\n")),(0,l.kt)("p",null,"By default Testkube is installed in the ",(0,l.kt)("inlineCode",{parentName:"p"},"testkube")," namespace."),(0,l.kt)("h3",{id:"2b-using-helm-to-deploy-the-server-components"},"2.b Using Helm to Deploy the Server Components"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Add the Kubeshop Helm repository as follows:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add testkube https://kubeshop.github.io/helm-charts\n")),(0,l.kt)("p",null,"If this repo already exists, run ",(0,l.kt)("inlineCode",{parentName:"p"},"helm repo update")," to retrieve\nthe ",(0,l.kt)("inlineCode",{parentName:"p"},"latest")," versions of the packages.  You can then run ",(0,l.kt)("inlineCode",{parentName:"p"},"helm search repo\ntestkube")," to see the charts."),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"To install the ",(0,l.kt)("inlineCode",{parentName:"li"},"testkube")," chart:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"helm install --create-namespace my-testkube testkube/testkube\n")),(0,l.kt)("p",null,"Please note that, by default, the namespace for the installation will be ",(0,l.kt)("inlineCode",{parentName:"p"},"testkube"),". If the ",(0,l.kt)("inlineCode",{parentName:"p"},"testkube")," namespace does not exist, it will be created for you."),(0,l.kt)("p",null,"If you wish to install into a different namespace, please use following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"helm install --namespace namespace_name my-testkube testkube/testkube\n")),(0,l.kt)("p",null,"To uninstall the ",(0,l.kt)("inlineCode",{parentName:"p"},"testkube")," chart if it was installed into default namespace:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"helm delete my-testkube testkube/testkube\n")),(0,l.kt)("p",null,"And from a namespace other than ",(0,l.kt)("inlineCode",{parentName:"p"},"testkube"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"helm delete --namespace namespace_name my-testkube testkube/testkube\n")),(0,l.kt)("h4",{id:"helm-properties"},"Helm Properties"),(0,l.kt)("p",null,"The following Helm defaults are used in the ",(0,l.kt)("inlineCode",{parentName:"p"},"testkube")," chart:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Is optional"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mongodb.auth.enabled"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mongodb.service.port"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},'"27017"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mongodb.service.portName"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},'"mongodb"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mongodb.service.nodePort"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mongodb.service.clusterIP"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},'""')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mongodb.nameOverride"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},'"mongodb"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mongodb.fullnameOverride"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},'"testkube-mongodb"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"testkube-api.image.repository"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},'"kubeshop/testkube-api-server"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"testkube-api.image.pullPolicy"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},'"Always"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"testkube-api.image.tag"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},'"latest"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"testkube-api.service.type"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},'"NodePort"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"testkube-api.service.port"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"8088")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"testkube-api.mongodb.dsn"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},'"mongodb://testkube-mongodb:27017"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"testkube-api.nats.uri"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},'"nats://testkube-nats"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"testkube-api.telemetryEnabled"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"testkube-api.storage.endpoint"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"testkube-minio-service-testkube:9000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"testkube-api.storage.accessKeyId"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"minio")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"testkube-api.storage.accessKey"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"minio123")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"testkube-api.storage.scrapperEnabled"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"testkube-api.slackToken"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},'""')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"testkube-api.slackTemplate"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},'""')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"testkube-api.slackConfig"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},'""')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"testkube-api.jobServiceAccountName"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},'""')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"testkube-api.logs.storage"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},'"minio"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"testkube-api.logs.bucket"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},'"testkube-logs"')))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"For more configuration parameters of ",(0,l.kt)("inlineCode",{parentName:"p"},"MongoDB")," chart please visit:\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/bitnami/charts/tree/master/bitnami/mongodb#parameters"},"https://github.com/bitnami/charts/tree/master/bitnami/mongodb#parameters"))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"For more configuration parameters of ",(0,l.kt)("inlineCode",{parentName:"p"},"NATS")," chart please visit:\n",(0,l.kt)("a",{parentName:"p",href:"https://docs.nats.io/running-a-nats-service/nats-kubernetes/helm-charts"},"https://docs.nats.io/running-a-nats-service/nats-kubernetes/helm-charts"))),(0,l.kt)("h2",{id:"uninstall-testkube"},"Uninstall Testkube"),(0,l.kt)("h3",{id:"using-helm"},"Using Helm:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"helm delete testkube\n")),(0,l.kt)("h3",{id:"using-testkubes-cli"},"Using Testkube's CLI:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"testkube purge\n")))}k.isMDXComponent=!0}}]);