import React, { memo, useCallback, useContext } from 'react';
import styled from 'styled-components';

import { UserContext } from '../utils/UserContextProvider';
import { MdHomeFilled } from 'react-icons/md';
import { FiSearch, FiSend, FiPlusSquare, FiHeart, FiLogOut } from 'react-icons/fi';
import { TbBrandSafari } from 'react-icons/tb';

const GNB = memo(() => {
  const { signout } = useContext(UserContext);
  const handleSignout = useCallback(() => {
    signout();
    window.location.reload();
  }, []);

  return (
    <NavWrapper>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png"
        alt="instagram"
        height="36px"
      />
      <div className="input-box">
        <input type="text" placeholder="검색" />
        <FiSearch className="input-icon" />
      </div>
      <div className="icons">
        <MdHomeFilled />
        <FiSend />
        <FiPlusSquare />
        <TbBrandSafari />
        <FiHeart />
        <FiLogOut onClick={handleSignout} />
      </div>
    </NavWrapper>
  );
});

GNB.displayName = 'GNB';
export default GNB;

const NavWrapper = memo(styled.nav`
  padding: 12px;
  height: 48px;
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-white);
  border: 0.5px solid var(--color-text-gray);

  .input-box {
    width: 360px;
    position: relative;
    * {
      color: var(--color-text-gray);
      background-color: var(--color-gray);
    }
    input {
      width: 100%;
      padding: 8px 12px;
      border-radius: 4px;
      &::placeholder {
        position: absolute;
        left: 36px;
      }
    }
    .input-icon {
      position: absolute;
      top: 8px;
      left: 8px;
    }
  }

  .icons {
    cursor: pointer;
    padding: 4px;
    font-size: 20px;
    * {
      margin-right: 12px;
      &:last-child {
        margin-right: 0px;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .input-box {
      display: none;
    }

    .icons {
      font-size: 16px;
      * {
        margin: 2px;
      }
    }
  }
`);
