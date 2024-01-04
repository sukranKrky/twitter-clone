import Items from "./items";
import Item from "./item";
import Content from "./content";
import {  useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import { TabContext } from "./context";
import StickyHeader from "../sticky-header";

export default function Tab({ children, activeTab }) {
  const [active, setActive] = useState(activeTab);

  const contents = children.filter((c) => c.type === Content);
  const stickyHeader=children.filter(c=>c.type===StickyHeader)
  const items = stickyHeader[0]

  const content = contents.find((c) => c.props.id === active);

  useEffect(() => {
    setActive(activeTab);
  }, [activeTab]);
  const data = {
    active,
    setActive,
  };


  return (
    <TabContext.Provider value={data}>
        {items}
      
      {content}
    </TabContext.Provider>
  );
}

Tab.Items = Items;
Tab.Item = Item;
Tab.Content = Content;

Tab.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.node //her biri node(react elemanı olmak zorunda)
  ),
  activeTab: PropTypes.string.isRequired,
};
