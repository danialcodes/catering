const { Home, ShoppingCart, Package, Users, LineChart } = require("lucide-react");

const navItems = [
    {
        name: "Dashboard",
        icon:Home,
        href:"#",
    },
    {
        name: "Orders",
        icon:ShoppingCart,
        href:"#"
    },
    {
        name: "Products",
        icon:Package,
        href:"#"
    },
    {
        name: "Customers",
        icon:Users,
        href:"#"
    },
    {
        name: "Analytics",
        icon:LineChart,
        href:"#"
    },
]

export default navItems;