export const Tabs = ({ tabs, activeTabId, onTabSelected }) => (
  // return (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => {
          return (
            <li
              key={tab.id}
              className={activeTabId === tab.id ? 'is-active' : ''}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                onClick={() => activeTabId !== tab.id && onTabSelected(tab.id)}
                data-cy="TabLink"
              >
                {tab.title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>

    <div className="block" data-cy="TabContent">
      {tabs.find(tab => tab.id === activeTabId)?.content}
    </div>
  </div>
  // );
);
