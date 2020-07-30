import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Dropdown, Anchor, Div, Icon } from 'atomize';
import shortId from 'shortid';

const BasicDropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const { countries } = useSelector((state) => state.transaction);

  const menuList = (
    <Div p={{ x: '1rem', y: '0.5rem' }}>
      {countries.map((name) => (
        <Anchor
          href={`/country/${name}`}
          d="block"
          p={{ y: '0.25rem' }}
          key={shortId.generate()}
        >
          {name}
        </Anchor>
      ))}
    </Div>
  );

  return (
    <>
      {countries.length === 0 ? (
        ''
      ) : (
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
      )}
    </>
  );
};

export default BasicDropdown;
