import { css } from '@emotion/react';
import reset from './reset';

export const baseStyle = css`
  ${reset}

  * {
    /* banselect */
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* 인터넷익스플로러 */
    user-select: none;

    -webkit-touch-callout: none; /* iOS Safari */
  }

  input[type='checkbox'] {
    display: none;
  }

  input[type='checkbox'] + label {
    cursor: pointer;
  }

  input[type='checkbox'] + label > *:first-of-type {
    padding-left: 5px;
    vertical-align: middle;
  }

  /* label:before에 체크하기 전 상태 CSS */
  input[type='checkbox'] + label:before {
    content: '';

    display: inline-block;

    width: 17px;
    height: 17px;

    vertical-align: middle;

    border: 2px solid #ff6f0f;
    border-radius: 4px;
  }

  /* label:before에 체크 된 상태 CSS */
  input[type='checkbox']:checked + label:before {
    content: '';

    background-color: #ff6f0f;
    background-image: url('check_btn.png');
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: contain;
    border-color: #ff6f0f;
  }
`;
