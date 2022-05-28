import React from 'react';
import Link from 'next/link';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>  
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          I am Aarish <br />
          Full Stack Web Developer
        </SectionTitle>
        <SectionText>
        I am here to make your websites and help you in your web development tasks.
        </SectionText>
        <a href="mailto:aarish.rajput27@gmail.com"><Button onClick={props.handleClick}>Email me</Button></a>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
