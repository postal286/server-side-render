import React from 'react';
import moment from 'moment';
import Link from 'next/link';

import { spliceText } from "../common";

const PostPreview = (props) => (
  <div>
    <Link
      key={props.post._id}
      href={`/post/${props.post._id}`}
    >
      {console.log(props)}
      <article
        title={`See "${props.post.title}" post detail`}
        className="mb-4 posts-page__posts-inner-wrapper"
      >
        <div
          style={props.post.img && { backgroundImage: `url(/static/uploads/${props.post.img})` }}
          className="posts-page__post-container-with-image"
        >
          <footer className="posts-page__post-footer">
            <h3 className="mb-2">{spliceText(props.post.title, 0, 40)}</h3>
            {props.post.description && <p>{spliceText(props.post.description, 0, 80)}</p>}
            <div className="posts-page__post-footer-author-date">
              <div className="mb-2">{`Author: ${spliceText(props.post.author, 0, 16)}`}</div>
              <p>{moment(props.post.created_at).format('LL')}</p>
            </div>
          </footer>
        </div>
        <style jsx>{`
            .posts-page__posts-inner-wrapper {
              cursor: pointer;
              transition: background-size .5s ease-in-out,
                          box-shadow .7s ease,
                          color .5s ease,
                          background-color .3s ease;
            }
            .posts-page__post-container-with-image {
              width: 360px;
              height: 300px;
              box-shadow: 0px 0px 10px -1px rgba(0,0,0,0.69);
              background-size: 150%;
              background-position: 50% 50%;
              display: flex;
              background-color: #a0a0a0;
              transition: background-size .5s ease-in-out,
                          box-shadow .7s ease,
                          color .5s ease,
                          background-color .3s ease;
              flex-direction: column-reverse;
            }
            .posts-page__post-container-with-image:hover {
              background-size: 160%;
              box-shadow: 0px 0px 30px 3px rgba(0,0,0,0.38)
            }
            .posts-page__post-footer {
              padding: 15px;
              transition: background-color .3s ease,
                          color .5s ease;
              background-color: rgba(0,0,0,.5);
              color: #fefefe;
            }
            .posts-page__post-container-with-image:hover .posts-page__post-footer {
              background-color: rgba(255, 205, 33, 0.9);
              color: #333;
            }
            .posts-page__post-footer-author-date {
              display: flex;
              justify-content: space-between;
            }
          `}
        </style>
      </article>
    </Link>
  </div>
);

export default PostPreview;
