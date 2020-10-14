import React from 'react';
import { Row } from 'antd';
import { connect } from 'react-redux';
import { Header } from '../../common';
import { UploadDocs } from '../../common/';
import { postNewDrawingSub } from '../../../api/index';
import { InstructionsModal } from '../../common/index';
import { tasks } from '../../../state/actions';

export const RenderDrawingSub = props => {
  const inst =
    'Once you finish your drawing, please take a picture of all your pages and upload them.  Tips: Take one photo per page. Find good Lighting and check your photo turns out clear. Make sure each page is straight and not cropped. After all pages are uploaded, click submit.';

  return (
    <>
      <Header title="READY, SET ...DRAW!" />
      <InstructionsModal instructions={inst} />
      <div className="writing-sub-container">
        <Row className="main-row">
          <p>{props.tasks.story.drawingPrompt}</p>
        </Row>
        <div className="upload">
          <h1 className="upload">Upload</h1>
          <UploadDocs
            submitButtonClassname="orange-submit-button"
            uploadButtonText="Choose files from your device"
            uploadButtonClassname="uploadButton"
            fileName="drawing"
            apiAxios={postNewDrawingSub}
            submissionId={props.tasks.id}
            storyId={props.tasks.story_id}
            setSubmitted={props.setHasDrawn}
            maxLength={1}
          />
        </div>
      </div>
    </>
  );
};

export default connect(
  state => ({
    tasks: state.tasks,
  }),
  {
    setHasDrawn: tasks.setHasDrawn,
  }
)(RenderDrawingSub);
