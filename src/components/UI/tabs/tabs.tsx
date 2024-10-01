import React, { useEffect, useState } from 'react';
import './tabs.scss';

interface Tab {
  title: string;
  value: string;
  disabled?: boolean;
  hidden?: boolean;
}

interface TabsProps {
  tabs: Tab[];
  defaultTab?: string;
  nextTab?: string;
  enablePreventFunction?: boolean;
  preventFunction?: () => Promise<void>;
  theme?: 'primary' | 'secondary' | 'danger';
  onChangeTab?: (value: string) => void;
}

const Tabs: React.FC<TabsProps> = ({
  tabs,
  defaultTab,
  nextTab,
  enablePreventFunction,
  preventFunction,
  theme = 'primary',
  onChangeTab
}) => {
  const [activeTabValue, setActiveTabValue] = useState<string | undefined>(defaultTab);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    if (defaultTab && onChangeTab) {
      onChangeTab(defaultTab);
    }
  }, []);

  useEffect(() => {
    if (nextTab) {
      setTabValue(nextTab);
    }
  }, [nextTab]);

  const setTabValue = async (newValue: string) => {
    if (isProcessing) return;

    if (enablePreventFunction && preventFunction) {
      setIsProcessing(true);
      try {
        await preventFunction();
      } finally {
        setIsProcessing(false);
      }
    }

    setActiveTabValue(newValue);
    if (onChangeTab) {
      onChangeTab(newValue);
    }
  };

  return (
    <div className={`tabs tabs--${theme}`}>
      {tabs.map((tab) => (
        <div
          key={tab.value}
          className={`tabs__item ${tab.value === activeTabValue ? 'active' : ''} ${tab.disabled || isProcessing ? 'disabled' : ''} ${tab.hidden ? 'hidden' : ''}`}
          onClick={!tab.disabled && !isProcessing ? () => setTabValue(tab.value) : undefined}
        >
          {tab.title}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
