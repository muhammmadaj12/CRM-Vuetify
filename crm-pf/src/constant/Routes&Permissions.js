export const navbarItems = [
    {
      title: "User Managment",
      icon: "mdi-account-group",
      // to: "/dashboard",
      attrs: {
        to: "/dashboard/user-managment",
        "active-class": "primary--text list-item-active",
      },
    },
    {
      title: "User Permission",
      icon: "mdi-account-group",
      useroption:"false",
      // to: "/dashboard",
      attrs: {
        to: "/dashboard/user-permission",
        "active-class": "primary--text list-item-active",
      },
    },
    {
        title: "Task Managment",
        icon: "mdi-format-list-bulleted",
        attrs: {
          to: "/dashboard/task-managment",
          "active-class": "primary--text list-item-active",
        },
      },
      {
        title: "Department Managment",
        icon: "mdi-office-building",
        attrs: {
          to: "/dashboard/department-managment",
          "active-class": "primary--text list-item-active",
        },
      },
      {
        title: "Teams Managment",
        icon: "mdi-account-multiple",
        attrs: {
          to: "/dashboard/teams-managment",
          "active-class": "primary--text list-item-active",
        },
      },
      {
        title: "Permission",
        icon: "mdi-dialpad",
        attrs: {
          to: "/dashboard/admin-layout",
          "active-class": "primary--text list-item-active",
        },
      },    
];