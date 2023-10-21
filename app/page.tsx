import React from 'react';
import Projects from '../app/components/Projects';
import Content from '../app/components/Content';
import TopHeader from '../app/components/TopHeader';

export default function Main() {
  return (
    <div className='bg-fuscia-300'>
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