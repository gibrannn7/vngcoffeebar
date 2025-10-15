import React, { useState } from 'react';

const Tabs = ({ tabs, children }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div>
      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center border-b border-primary-brown/30 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-6 py-3 font-medium text-lg relative focus:outline-none mx-2 my-1 ${
              activeTab === tab.id
                ? 'text-accent-gold'
                : 'text-gray-600 hover:text-accent-gold'
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
            {activeTab === tab.id && (
              <div className="absolute bottom-0 left-0 w-full h-1 bg-accent-gold rounded-t"></div>
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div>
        {tabs.map((tab, index) => (
          <div
            key={tab.id}
            className={`tab-content ${activeTab === tab.id ? 'block' : 'hidden'}`}
          >
            {children[index]}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;