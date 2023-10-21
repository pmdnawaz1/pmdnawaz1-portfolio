import React from 'react';
import Projects from '../app/components/Projects';
import Content from '../app/components/Content';
import TopHeader from '../app/components/TopHeader';

export default function Main() {
  return (
    <div>
      <TopHeader />
      <div
        style={{
          display: 'grid',
          gridTemplateAreas: `
            "b c c"
            "b c c"
            "b c c"
          `,
        }}
        className="focus:shadow-lg focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        <div style={{ gridArea: 'b' }}>
          <Projects />
        </div>
        <div style={{ gridArea: 'c' }}>
          <Content />
        </div>
      </div>
    </div>
  );
}