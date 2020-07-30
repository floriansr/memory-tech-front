import React, { useState } from 'react';
import { Dropdown, Anchor, Div, Icon } from 'atomize';
import shortId from 'shortid';

const BasicDropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const menuList = (
    <Div p={{ x: '1rem', y: '0.5rem' }}>
      {['France', 'United Kingdom', 'All'].map((name) => (
        <Anchor d="block" p={{ y: '0.25rem' }} key={shortId.generate()}>
          {name}
        </Anchor>
      ))}
    </Div>
  );

  return (
    <>
      <Dropdown
        w="50%"
        isOpen={showDropdown}
        onClick={() => setShowDropdown(!showDropdown)}
        menu={menuList}
        bg="info100"
        focusBg="info200"
        borderColor="info600"
        focusBorderColor="info800"
        textColor="info800"
        textWeight="500"
        openSuffix={<Icon name="Up" color="info700" size="16px" />}
        closeSuffix={<Icon name="Down" color="info700" size="16px" />}
      >
        All
      </Dropdown>
    </>
  );
};

export default BasicDropdown;
