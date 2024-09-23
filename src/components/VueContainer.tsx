import React, { useEffect, useRef } from 'react';
import { createApp } from 'vue';
import Blog from '../pages/Blog.vue'; // Vue Blog component
import EventCalendar from '../pages/EventCalendar.vue'; // Vue Event Calendar component

interface VueContainerProps {
  component: 'Blog' | 'EventCalendar';
}

const VueContainer: React.FC<VueContainerProps> = ({ component }) => {
  const vueMountPoint = useRef<HTMLDivElement | null>(null);
  const vueApp = useRef<any>(null);  // Using useRef to persist the Vue app instance across renders

  useEffect(() => {
    if (vueMountPoint.current) {
      if (component === 'Blog') {
        vueApp.current = createApp(Blog);
      } else if (component === 'EventCalendar') {
        vueApp.current = createApp(EventCalendar);
      }
      vueApp.current.mount(vueMountPoint.current);
    }

    return () => {
      if (vueApp.current) {
        vueApp.current.unmount();
      }
    };
  }, [component]);

  return <div ref={vueMountPoint}></div>;
};

export default VueContainer;
