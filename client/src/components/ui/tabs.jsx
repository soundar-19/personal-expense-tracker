import React, { useState } from 'react';

const Tabs = ({ defaultValue, children }) => {
  const [activeTab, setActiveTab] = useState(defaultValue);

  const handleTabClick = (value) => {
    setActiveTab(value);
  };

  return (
    <div>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { activeTab, onTabClick: handleTabClick })
      )}
    </div>
  );
};

const TabsList = ({ children }) => {
  return <div className="tabs-list">{children}</div>;
};

const TabsTrigger = ({ value, onTabClick, activeTab, children }) => {
  const isActive = activeTab === value;

  return (
    <button
      className={`tab-trigger ${isActive ? 'active' : ''}`}
      onClick={() => onTabClick(value)}
    >
      {children}
    </button>
  );
};

const TabsContent = ({ value, activeTab, children }) => {
  return activeTab === value ? <div className="tab-content">{children}</div> : null;
};

export { Tabs, TabsList, TabsTrigger, TabsContent };
