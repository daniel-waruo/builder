import React, {
  CSSProperties, FC, useContext, useState,
} from 'react';

import {
  ArrowHeadType, Position, getEdgeCenter, getMarkerEnd, getBezierPath,
} from 'react-flow-renderer';
import EdgeModal from '../EdgeModal';
import { FlowContext } from '../FlowSection';
import { IElement } from '../../../interfaces/project';

const foreignObjectSize = 40;

type BotEdgeProps = {
  id:string,
  sourceX:number,
  sourceY: number,
  targetX: number,
  targetY:number,
  sourcePosition:Position,
  targetPosition:Position,
  style:CSSProperties,
  data:{
    keyWord:string
  },
  arrowHeadType:ArrowHeadType,
  markerEndId:string
}

const BotEdge:FC<BotEdgeProps> = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  data = { keyWord: '1' },
  arrowHeadType,
  markerEndId,
}:BotEdgeProps) => {
  const edgePath = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });
  const markerEnd = getMarkerEnd(arrowHeadType, markerEndId);
  const [edgeCenterX, edgeCenterY] = getEdgeCenter({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });
  // initiate is Visible State
  const [isVisible, setVisible] = useState(false);
  const { getElement } = useContext(FlowContext);
  // make sure get context is within context
  if (!getElement) { throw Error('get Node is not within context'); }
  // get the element that has been deleted
  let edge:IElement;
  // button is Visible
  let buttonIsVisible:boolean = true;
  try {
    edge = getElement(id);
    // get the source node attached to the element
    // and if it is the start node dont display the button
    buttonIsVisible = !(getElement(edge.source).type === 'start');
  } catch (e) {
    return null;
  }
  return (
    <>
      <EdgeModal isVisible={isVisible} setVisible={setVisible} edge={edge} />
      <path
        id={id}
        style={style}
        className="react-flow__edge-path"
        d={edgePath}
        markerEnd={markerEnd}
      />
      {buttonIsVisible ? (
        <foreignObject
          width={foreignObjectSize}
          height={foreignObjectSize}
          x={edgeCenterX - foreignObjectSize / 2}
          y={edgeCenterY - foreignObjectSize / 2}
          className="edgebutton-foreignobject"
          requiredExtensions="http://www.w3.org/1999/xhtml"
        >
          <button
            type="button"
            style={{
              background: '#ecea73',
              border: '1px solid #fff',
              borderRadius: '50%',
              cursor: 'pointer',
              fontSize: '21px',
              height: '40px',
              lineHeight: 1,
              width: '40px',
            }}
            onClick={(event) => {
              event.stopPropagation();
              setVisible(true);
            }}
          >
            {data.keyWord}
          </button>
        </foreignObject>
      ) : null}
    </>
  );
};

export default BotEdge;
