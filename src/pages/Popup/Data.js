// http://localhost:1234/src/static/popup.html
const config = [
  {
    section: 'Source',
    href: 'https://github.com',
    links: [
      {
        name: 'book',
        href: 'https://book.git-scm.com/book/en/v2',
        label2: ' | ',
        name2: 'cheats',
        href2: 'https://gist.github.com/codemarc/7e3c37a880e679f8fa310f67cdb29a85',
        label3: ' | ',
        name3: 'gists',
        href3: 'https://gist.github.com',
      },
      {
        name: 'as Codemarc',
        href: 'https://github.com/codemarc',
      },
      {
        name: 'as CMC',
        href: 'https://github.com/orgs/CodemarcConsulting/repositories',
      },
      {
        name: 'as Containers',
        href: 'https://github.com/orgs/CodemarcConsulting/packages?ecosystem=container',
      },
      {
        name: 'Notes to my future self',
        href: 'https://github.com/codemarc/ntmfs'
      },
      {
        name: "",
        href: ""
      }
    ]
  },
  {
    section: 'Communications',
    href: 'https://www.tdameritrade.com/',
    links: [
      {
        name: 'slack',
        href: 'https://thebyzantineempire.slack.com/messages/general/',
        label2: ' | ',
        name2: 'teams',
        href2: 'https://go.microsoft.com/fwlink/p/?LinkID=873020&clcid=0x409&culture=en-us&country=US&lm=deeplink&lmsrc=homePageWeb&cmpid=WebSignIn',
        label3: ' | ',
        name3: 'webex',
        href3: 'https://web.webex.com/dashboard',
        label4: ' | ',
        name4: 'zoom',
        href4: 'https://zoom.us/signin'
      },
      {
        name: 'gsq.io',
        href: 'ht1tps://goldensquirrel.io/'
      },
      {
        name: 'toojays',
        href: 'https://chrome.google.com/webstore/detail/toojays-info/gcdnlnojkjemigholljneglingmijipp'
      },
      {
        name: '',
        href: ''
      },
      {
        name: '',
        href: ''
      },
      {
        name: '',
        href: ''
      }
    ]
  },
  {
    section: 'Data',
    title: 'Data Mesh Learning...',
    href: 'https://datameshlearning.com/',
    links: [
      {
        name: 'Starburst Galaxy (cm)',
        href: 'https://codemarc.galaxy.starburst.io/',
        label2: ' | ',
        name2: 'doc',
        href2: 'https://docs.starburst.io/'
      },
      {
        name: '',
        href: ''
      },
      {
        name: '',
        href: ''
      },
      {
        name: '',
        href: ''
      },
      {
        name: '',
        href: ''
      },
      {
        name: '',
        href: ''
      },
    ]
  },
  {
    section: 'Developer',
    links: [
      {
        name: 'chrome webstore dev dash',
        href: 'https://chrome.google.com/webstore/developer/dashboard'
      },
      {
        name: 'LinkedIn Learning',
        href: 'https://www.linkedin.com/learning/?trk=nav_neptune_learning'
      },
      {
        name: 'React',
        href: 'https://github.com/enaqx/awesome-react',
        label2: ' | ',
        name2: 'MUI',
        href2: 'https://mui.com/',
        label3: ' | ',
        name3: 'uikit',
        href3: 'https://getuikit.com/docs/introduction',
        label4: ' | ',
        name4: 'react',
        href4: 'https://vacarsu.github.io/uikit-react/'
      },
      {
        name: '',
        href: ''
      },
      {
        name: '',
        href: ''
      },
      {
        name: '',
        href: ''
      }
    ]
  },
  {
    section: 'Amazon',
    href: 'https://amazon.com/',
    links: [
      {
        name: 'about',
        href: 'https://www.aboutamazon.com/',
        label2: '⟡',
        name2: 'videos',
        href2: 'https://www.amazon.com/Amazon-Video/b/?ie=UTF8&node=2858778011&ref_=nav_dvm_us_eg_cs_nav_rec_T1',
        label3: '⟡',
        name3: 'music',
        href3: 'https://music.amazon.com/',
        label4: '⟡',
        name4: 'books',
        href4: 'https://amazon.com/books',
      },
      {
        name: 'developer',
        href: 'https://developer.amazon.com/',
      },
      {
        name: 'aws console',
        href: "http://console.aws.amazon.com/",
      },
      {
        name: 'alexa app ○',
        href: 'https://alexa.amazon.com/',
      },
      {
        name: 'leadership principles',
        href: 'https://www.amazon.jobs/en/principles'
      },
      {
        name: '',
        href: ''
      },
    ]
  },
  {
    section: 'Microsoft',
    href: 'https://www.bing.com/',
    links: [
      {
        name: 'about',
        href: 'https://www.microsoft.com/en-us/sitemap.aspx',
        label2: '|',
        name2: 'office',
        href2: 'https://www.office.com/?auth=1',
        label3: '|',
        name3: 'xbox',
        href3: 'https://www.microsoft.com/en-us/store/b/xbox'
      },
      {
        name: 'developer',
        href: 'https://developer.microsoft.com/en-us/'
      },
      {
        name: 'azure console',
        href: 'https://portal.azure.com/#allservices/category/All'
      },
      {
        name: '',
        href: ''
      },
      {
        name: '',
        href: ''
      },
      {
        name: '',
        href: ''
      }
    ]
  },
  {
    section: 'Google',
    href: 'https://www.google.com/',
    links: [
      {
        name: 'about',
        href: 'https://about.google/products/#all-products',
        label2: '|',
        name2: 'play',
        href2: 'https://play.google.com/store?hl=en_US&gl=US',
        label3: '|',
        name3: 'youtube',
        href3: 'https://www.youtube.com/',
      },
      {
        name: 'cloud doc',
        href: 'https://cloud.google.com/docs'
      },
      {
        name: 'cloud console',
        href: 'https://console.cloud.google.com/',
      },
      {
        name: 'workspace admin console',
        href: 'https://admin.google.com/'
      },
      {
        name: 'android developers',
        href: 'https://developer.android.com/'
      },
      {
        name: '',
        href: ''
      }
    ]
  },
  {
    section: 'Cloud',
    href: 'https://landscape.cncf.io/',
    links: [
      {
        name: 'Rancher k3d localhost',
        href: 'https://rancher.k3d.localhost/dashboard/c/local/explorer#cluster-metrics'
      },
      {
        name: 'Confluent Cloud',
        href: 'https://login.confluent.io/login?state=hKFo2SBCa1o3dFQ3SnU3aHp6RmRIeXlUUHdaNXFYVnpLM08tS6FupWxvZ2luo3RpZNkgZndQYmU1NEllQjhtVk1PVGY4YmhPLWpqNVMzUnEzeWajY2lk2SBsMmhPcDBTMHRrU0IwVEZ0dklZZlpaOUVhS0Z2clNjNg&client=l2hOp0S0tkSB0TFtvIYfZZ9EaKFvrSc6&protocol=oauth2&redirect_uri=https%3A%2F%2Fconfluent.cloud%2Fauth_callback&scope=openid%20profile%20email&response_type=code&response_mode=query&nonce=NDFQYVZkQ2xaN1B3ZkUzOFdCZ1hQYkFxcDZZWGpCa3lnaUdfMHpBTWVjcw%3D%3D&code_challenge=jlnBwafOShf_UdJqizwgREcvO22egmieP0iXD5bznX8&code_challenge_method=S256&auth0Client=eyJuYW1lIjoiYXV0aDAtcmVhY3QiLCJ2ZXJzaW9uIjoiMS44LjAifQ%3D%3D'
      },
      {
        name: '',
        href: ''
      },
      {
        name: '',
        href: ''
      },
      {
        name: '',
        href: ''
      },
      {
        name: '',
        href: ''
      },
    ]
  }
]
export default config