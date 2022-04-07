import React from 'react';
import {BsCloudUpload, BsCheckCircle} from 'react-icons/bs'
import {useNavigate} from 'react-router-dom';
import {EditorFeedbackStyles, Feedback, FeedbackMessage, FeedbackOption} from './styles'
import {Button} from './../../../ui/buttons'

function EditorFeedback ({children, status, writeCompleted, ...props})  {
  const navigator = useNavigate()
  return (
        <EditorFeedbackStyles  {...props}>
          {
            !status
            ?
            <Feedback>
            <BsCheckCircle color="Limegreen" size="12rem"/>
            <FeedbackMessage>
              Product Uploaded Successfully
            </FeedbackMessage>
            <FeedbackOption>
            <Button 
            color="#FFF"
            onClick={()=> writeCompleted(false)}
            disabled={status}
            >Add Another Product</Button>
            <Button 
            color="#FFF"
            onClick={()=> navigator('/dashboard')}
            >View All Products</Button>
          </FeedbackOption>
          </Feedback>
          :
          <Feedback>
          <BsCloudUpload color="Limegreen" size="12rem"/>
          <FeedbackMessage>
            Uploading New Product
          </FeedbackMessage>
        </Feedback>
          }

        </EditorFeedbackStyles>
  )
}

export default EditorFeedback