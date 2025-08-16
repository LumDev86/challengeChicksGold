import { FaCoins, FaBox, FaGamepad, FaCogs, FaExchangeAlt, FaShieldAlt } from "react-icons/fa";

export const menuData = [
  {
    label: "CURRENCY",
    icon: <FaCoins />,
    sub: [
      { name: "USD", url: "/currency/usd" },
      { name: "EUR", url: "/currency/eur" },
      { name: "GBP", url: "/currency/gbp" },
      { name: "JPY", url: "/currency/jpy" },
    ],
  },
  {
    label: "ITEMS",
    icon: <FaBox />,
    sub: [
      { name: "Weapons", url: "/items/weapons" },
      { name: "Armor", url: "/items/armor" },
      { name: "Potions", url: "/items/potions" },
      { name: "Mounts", url: "/items/mounts" },
    ],
  },
  {
    label: "ACCOUNTS",
    icon: <FaGamepad />,
    sub: [
      { name: "Premium", url: "/accounts/premium" },
      { name: "Trial", url: "/accounts/trial" },
      { name: "Guest", url: "/accounts/guest" },
      { name: "Custom", url: "/accounts/custom" },
    ],
  },
  {
    label: "SERVICES",
    icon: <FaCogs />,
    sub: [
      { name: "Boosting", url: "/services/boosting" },
      { name: "Coaching", url: "/services/coaching" },
      { name: "Custom Orders", url: "/services/custom" },
      { name: "Farming", url: "/services/farming" },
    ],
  },
  {
    label: "SWAP",
    icon: <FaExchangeAlt />,
    sub: [
      { name: "Crypto Swap", url: "/swap/crypto" },
      { name: "Item Swap", url: "/swap/items" },
    ],
  },
  {
    label: "SHELL",
    icon: <FaShieldAlt />,
    sub: [
      { name: "Gold Shell", url: "/shell/gold" },
      { name: "Diamond Shell", url: "/shell/diamond" },
    ],
  },
];
