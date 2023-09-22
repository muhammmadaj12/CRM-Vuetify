export const navbarItems = [
    {
      title: "User Managment",
      icon: "mdi-account-group",
      // to: "/dashboard",
      attrs: {
        to: "/user-managment",
        "active-class": "primary--text list-item-active",
      },
    },
    {
        title: "Task Managment",
        icon: "mdi-format-list-bulleted",
        attrs: {
          to: "/task-managment",
          "active-class": "primary--text list-item-active",
        },
      },
      {
        title: "Department Managment",
        icon: "mdi-office-building",
        attrs: {
          to: "/department-managment",
          "active-class": "primary--text list-item-active",
        },
      },
      {
        title: "Teams Managment",
        icon: "mdi-account-multiple",
        attrs: {
          to: "/teams-managment",
          "active-class": "primary--text list-item-active",
        },
      },
      {
        title: "User Permission",
        icon: "mdi-account-group",
        // to: "/dashboard",
        attrs: {
          to: "/user-permission",
          "active-class": "primary--text list-item-active",
        },
      },
      {
          title: "Task Permission",
          icon: "mdi-format-list-bulleted",
          attrs: {
            to: "/task-permission",
            "active-class": "primary--text list-item-active",
          },
        },
        {
          title: "Department Permission",
          icon: "mdi-office-building",
          attrs: {
            to: "/department-permission",
            "active-class": "primary--text list-item-active",
          },
        },
        {
          title: "Teams Permission",
          icon: "mdi-account-multiple",
          attrs: {
            to: "/teams-permission",
            "active-class": "primary--text list-item-active",
          },
        },    
];