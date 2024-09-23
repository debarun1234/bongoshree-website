import React, { useEffect, useRef } from 'react';
import { createApp } from 'vue';
import Blog from '../pages/Blog.vue'; // Vue Blog component
import EventCalendar from '../pages/EventCalendar.vue'; // Vue Event Calendar component

interface VueContainerProps {
  component: 'Blog' | 'EventCalendar';
}

const VueContainer: React.FC<VueContainerProps> = ({ component }) => {
  const vueMountPoint = useRef<HTMLDivElement | null>(null);
  let vueApp: any = null;

  useEffect(() => {
    if (vueMountPoint.current) {
      if (component === 'Blog') {
        vueApp = createApp(Blog);
      } else if (component === 'EventCalendar') {
        vueApp = createApp(EventCalendar);
      }
      vueApp.mount(vueMountPoint.current);
    }

    return () => {
      if (vueApp) {
        vueApp.unmount();
      }
    };
  }, [component]);

  return <div ref={vueMountPoint}></div>;
};

export default VueContainer;
