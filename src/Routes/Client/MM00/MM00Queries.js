import { gql } from "apollo-boost";

export const VIEW_NOTICE = gql`
  query viewAllNotice {
    viewAllNotice {
      _id
      title
      description
      createdAt
    }
  }
`;

export const ADD_NOTICE = gql`
  mutation createNotice($title: String!, $description: String!) {
    createNotice(title: $title, description: $description) {
      _id
      title
      createdAt
      description
      author
    }
  }
`;

export const GET_NOTICEBOARD_DETAIL = gql`
  query viewNoticeBoardDetail($id: String!) {
    viewNoticeBoardDetail {
      _id
      title
      description
      createdAt
    }
  }
`;

export const GET_NOTICEBOARD_BEFORE_ID = gql`
  query getNoticeBoardBeforeId($id: String!) {
    getNoticeBoardBeforeId(_id: $id) {
      _id
    }
  }
`;

export const GET_NOTICEBOARD_NEXT_ID = gql`
  query getNoticeBoardNextId($id: String!) {
    getNoticeBoardNextId(_id: $id) {
      _id
    }
  }
`;
