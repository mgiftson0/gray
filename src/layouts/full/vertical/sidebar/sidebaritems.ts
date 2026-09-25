export interface ChildItem {
  id?: number | string;
  name: string;
  icon?: LucideIcon;
  items?: ChildItem[];
  item?: unknown;
  url?: string;
  color?: string;
  disabled?: boolean;
  subtitle?: string;
  badge?: boolean;
  badgeType?: string;
  badgeContent?: string;
  isActive?: boolean;
  external?: boolean;
  isPro?: boolean
}

export interface MenuItem {
  heading?: string;
  name?: string;
  icon?: LucideIcon;
  id?: number;
  to?: string;
  item?: MenuItem[];
  items?: ChildItem[];
  url?: string;
  disabled?: boolean;
  subtitle?: string;
  badgeType?: string;
  badge?: boolean;
  badgeContent?: string;
  isActive?: boolean;
  isPro?: boolean
}

import { uniqueId } from "lodash";

import {
  BarChart3,
  Banknote,
  BookOpen,
  CreditCard,
  FileText,
  Files,
  HelpCircle,
  Key,
  Lock,
  LogIn,
  LucideIcon,
  PieChart,
  Plug,
  Settings,
  ShieldCheck,
  Table,
  Tag,
  Ticket,
  Unlink,
  UserPlus, Smile, House, NotebookText, Component,
  Table2,
  Form,
  CircleUserRound,
  Sparkles,
  ChartBar
} from "lucide-react"

const SidebarContent: MenuItem[] = [
  {
    heading: "Dashboard",
    items: [
      {
        id: uniqueId(),
        name: "Modern",
        icon: House,
        url: "/",
      }
    ],
  },
  {
    heading: "Pages",
    items: [
      {
        id: uniqueId(),
        name: "Table",
        icon: Table2,
        url: "/pages/tables",
      },
      {
        id: uniqueId(),
        name: "Form",
        icon: Form,
        url: "/pages/form",
      },
      {
        id: uniqueId(),
        name: "User Profile",
        icon: CircleUserRound,
        url: "/pages/user-profile",
      },
    ],
  },
  {
    heading: "Apps",
    items: [
      {
        id: uniqueId(),
        name: "Notes",
        icon: NotebookText,
        url: "/apps/notes",
      },
      {
        name: "Blogs",
        id: uniqueId(),
        icon: BookOpen,
        items: [
          {
            id: uniqueId(),
            name: "Blog Listing",
            url: "/apps/blog/post",
          },
          {
            id: uniqueId(),
            name: "Blog Detail",
            url: "/apps/blog/detail/streaming-video-way-before-it-was-cool-go-dark-tomorrow",
          },
          {
            id: uniqueId(),
            name: "Blog Edit",
            url: "/apps/blog/edit",
          },
          {
            id: uniqueId(),
            name: "Blog Create",
            url: "/apps/blog/create",
          },
          {
            id: uniqueId(),
            name: "Manage Blog",
            url: "/apps/blog/manage-blog",
          },
        ],
      },
      {
        id: uniqueId(),
        name: "Tickets",
        icon: Ticket,
        url: "/apps/tickets",
      },
    ],
  },
  {
    heading: "UI ELEMENTS",
    items: [
      {
        name: "UI Components",
        id: uniqueId(),
        icon: Component,
        items: [

          {
            id: uniqueId(),
            name: "Button",
            url: "/ui/button",
          },
          {
            id: uniqueId(),
            name: "Avatar",
            url: "/ui/avatar",
          },
          {
            id: uniqueId(),
            name: "Badge",
            url: "/ui/badge",
          },
          {
            id: uniqueId(),
            name: "Tooltip",
            url: "/ui/tooltip",
          },
          {
            id: uniqueId(),
            name: "Input",
            url: "/ui/input",
          },

          {
            id: uniqueId(),
            name: "Textarea",
            url: "/ui/textarea",
          },
          {
            id: uniqueId(),
            name: "Switch",
            url: "/ui/switch",
          },
          {
            id: uniqueId(),
            name: "Tab",
            url: "/ui/tab",
          },
          {
            id: uniqueId(),
            name: "Select",
            url: "/ui/select",
          },
          {
            id: uniqueId(),
            name: "Checkbox",
            url: "/ui/checkbox",
          },
          {
            id: uniqueId(),
            name: "Accordion",
            url: "/ui/accordion",
          },
          {
            id: uniqueId(),
            name: "Card",
            url: "/ui/card",
          },
          {
            id: uniqueId(),
            name: "Radio Group",
            url: "/ui/radio-group",
          },

          {
            id: uniqueId(),
            name: "Datepicker",
            url: "/ui/calendar",
          },
        ],
      },


    ],
  },
  {
    heading: "FORM ELEMENTS",
    items: [
      {
        name: "Form Elements",
        id: uniqueId(),
        icon: Banknote,
        items: [

          {
            id: uniqueId(),
            name: "Input",
            url: "/ui/input",
          },
          {
            id: uniqueId(),
            name: "Select",
            url: "/ui/select",
          },
          {
            id: uniqueId(),
            name: "Checkbox",
            url: "/ui/checkbox",
          },
          {
            id: uniqueId(),
            name: "Radio",
            url: "/ui/radio-group",
          },
          {
            id: uniqueId(),
            name: "Datepicker",
            url: "/ui/calendar",
          },
        ],
      },
     {
        name: "Form layouts",
        id: uniqueId(),
        icon: Files,
        items: [
          {
            id: uniqueId(),
            name: "Forms Layouts",
            url: "/pages/form",
          },
        ],
      },

    ],
  },
  {
    heading: "Widgets",
    items: [
      {
        name: "Cards",
        id: uniqueId(),
        icon: CreditCard,
        url: "/widgets/cards",

      },

      {
        name: "Charts",
        id: uniqueId(),
        icon: PieChart,
        url: "/widgets/charts",

      },
    ],
  },
  {
    heading: "Icons",
    items: [
      {
        id: uniqueId(),
        name: "Iconify Icons",
        icon: Smile,
        url: "/icons/iconify",
      },
    ],
  },
  {
    heading: "Auth",
    items: [
      {
        id: uniqueId(),
        name: "Error",
        icon: Unlink,
        url: "/auth/error",
      },
      {
        name: "Login",
        icon: LogIn,
        items: [
          {
            id: uniqueId(),
            name: "Boxed Login",
            url: "/auth/auth2/login",
          },
        ],
      },
      {
        name: "Register",
        icon: UserPlus,
        items: [
          {
            id: uniqueId(),
            name: "Boxed Register",
            url: "/auth/auth2/register",
          },
        ],
      },
      {
        name: "Forgot Password",
        icon: Lock,
        items: [
          {
            id: uniqueId(),
            name: "Boxed Forgot Pwd",
            url: "/auth/auth2/forgot-password",
          },
        ],
      },
      {
        name: "Two Steps",
        icon: ShieldCheck,
        items: [
          {
            id: uniqueId(),
            name: "Boxed Two Steps",
            url: "/auth/auth2/two-steps",
          },
        ],
      }
    ],
  },

  {
    heading: "SEO",
    items: [
      {
        id: uniqueId(),
        name: "SEO Analytics",
        icon: ChartBar,
        url: "/dashboards/seo",
      },

    ],
  },
];

export default SidebarContent;
