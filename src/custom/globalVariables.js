const globalVariables = {

  // Telepost Info
  telepost: {
    site: {
      name: 'Telepost.me',
      url: 'https://telepost.me',
    },
    webApp: {
      name: 'app.telepost.me',
      url: 'https://app.telepost.me',
    },
    bot: {
      name: '@TelepostBot',
      url: 'https://t.me/TelepostBot',
    },
    supportUser: {
      name: '@TelepostSupport',
      url: 'https://t.me/TelepostSupport',
    },
    supportChat: {
      name: 'Telepost чат',
      url: 'https://t.me/joinchat/Ypg01CdfpW5jNWFi',
    },
  },

  // Github Issues information
  github: {
    url: 'https://github.com',
    organizationName: 'Telepost-me',
    projectRepository: 'telepost-me.github.io',
    get projectUrl() {
      return `${this.url}/${this.organizationName}/${this.projectRepository}`;
    },
    issues: {
      repo: 'support',
      get url() {
        return `${globalVariables.github.url}/${globalVariables.github.organizationName}/${this.repo}`;
      },
      get urlQuery() {
        return `${globalVariables.github.url}/${globalVariables.github.organizationName}/${this.repo}/issues?q=is%3Aissue`;
      },
      bugs: {
        title: '🐞 Bugs',
        states: ['open'],
        template: 'bug.yml',
        labels: ['bug'],
        get url() {
          return `${globalVariables.github.issues.urlQuery}${this.states.map(state => `+state%3A${state}`).join('')}${this.labels.map(label => `+label%3A${label}`).join('')}`;
        },
        get urlTemplate() {
          return `${globalVariables.github.issues.url}/issues/new?labels=${this.labels.join(',')}&template=${this.template}`;
        },
      },
      ideas: {
        title: '💡 Ideas',
        states: ['open'],
        template: 'idea.yml',
        labels: ['idea'],
        get url() {
          return `${globalVariables.github.issues.urlQuery}${this.states.map(state => `+state%3A${state}`).join('')}${this.labels.map(label => `+label%3A${label}`).join('')}`;
        },
        get urlTemplate() {
          return `${globalVariables.github.issues.url}/issues/new?labels=${this.labels.join(',')}&template=${this.template}`;
        },
      },
    },
  },

  instatus: {
    url: 'https://telepost.instatus.com',
  },

  // Checker data
  checker: {
    sites: [
      {
        name: "app.telepost.me",
        src: "https://app.telepost.me/ru/assets/logo1.png",
      },
      {
        name: "telegram.org",
        src: "https://telegram.org/favicon.ico"
      },
      {
        name: "t.me",
        src: "https://t.me/favicon.ico"
      },
      {
        name: "telesco.pe",
        src: "https://telesco.pe/img/ts_favicon.ico"
      },
    ],
    colors: {
      onload: "#00BB00",
      onerror: "#FF0000",
    },
  },
};

export default globalVariables;
