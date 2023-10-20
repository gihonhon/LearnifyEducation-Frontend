"use client";
import React, { useState } from "react";

const Dashboard = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  return (
    <>
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-base-300">
          <div className="flex-none">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
        </div>
        {/* Page content here */}
        {/** Display content when click one of in Sidebar content */}
        {selectedItem && (
          <div className="content-container">
            {/* Content for Sidebar Item 1 */}
            {selectedItem === "item1" && <p>Content for Sidebar Item 1</p>}

            {/* Content for Sidebar Item 2 */}
            {selectedItem === "item2" && <p>Content for Sidebar Item 2</p>}
          </div>
        )}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200">
          {/* Sidebar content here */}
          <li>
            <a onClick={() => setSelectedItem("item1")}>Sidebar Item 1</a>
          </li>
          <li>
            <a onClick={() => setSelectedItem("item1")}>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Dashboard;
