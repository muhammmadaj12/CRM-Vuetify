export const navbarItems = [
  {
    title: "User Managment",
    icon: "mdi-account-group",
    attrs: {
      to: "/dashboard/user-managment",
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
    title: "User Permission",
    icon: "mdi-account-group",
    useroption: true, // Only shown to admin
    attrs: {
      to: "/dashboard/user-permission",
      "active-class": "primary--text list-item-active",
    },
  },
  {
    title: "Task Permission",
    icon: "mdi-format-list-bulleted",
    useroption: true, // Only shown to admin
    attrs: {
      to: "/dashboard/task-permission",
      "active-class": "primary--text list-item-active",
    },
  },
  {
    title: "Department Permission",
    icon: "mdi-office-building",
    useroption: true, // Only shown to admin
    attrs: {
      to: "/dashboard/department-permission",
      "active-class": "primary--text list-item-active",
    },
  },
  {
    title: "Teams Permission",
    icon: "mdi-account-multiple",
    useroption: true, // Only shown to admin
    attrs: {
      to: "/dashboard/teams-permission",
      "active-class": "primary--text list-item-active",
    },
  },
];
