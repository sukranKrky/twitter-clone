import React from "react";
import { PropTypes } from "prop-types"
import { Link } from "react-router-dom";
 
export default function SidebarSection({ title, children, more }) {
  return (
    <section className="bg-[color:var(--background-secondary)] mb-4 rounded-2xl  border border-[#16181c]  ">
      <h5 className="py-3 px-4 text-xl font-extrabold leading-6 flex items-center ">
        {title}
      </h5>
      <div className="grid">
        {children}

        {more && (
          <Link
            to={more}
            className="h-[3.25rem] rounded-b-2xl flex items-center px-4 text-[color:var(--color-primary)] transition-colors hover:bg-[#eff3f41a] "
          >
            Daha fazla göster
          </Link>
        )}
      </div>
    </section>
  );
}

SidebarSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  more: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};
SidebarSection.defaultProps = {
  more: false,
};
