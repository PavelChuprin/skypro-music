import { styled } from "styled-components";

export const BarVolumeBlock = styled.div`
  width: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 0 92px 0 0;
`;

export const VolumeContent = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: end;
`;

export const VolumeImage = styled.div`
  width: 13px;
  height: 18px;
  margin-right: 17px;
	position: relative;
`;

export const VolumeSvg = styled.svg`
  width: 13px;
  height: 18px;
  fill: transparent;
	position: absolute;
	left: 10px;
	&:hover {
    cursor: pointer;
  }
`;

export const VolumeProgress = styled.div`
  width: 109px;
`;

export const VolumeProgressLine = styled.input`
--progress-height: 5px;
--progress-color: #b672ff;
--progress-color: ${(props) => props.color ?? "#b672ff"};

--progress-bg-color: #2e2e2e;

margin: 0;
width: 100%;
height: var(--progress-height);
-webkit-appearance: none;
cursor: pointer;
background: transparent;
position: relative;
overflow: hidden;

&:hover{
	--progress-height: 8px;
	
}

&::-webkit-slider-runnable-track {
	position: relative;
	height: var(--progress-height);
	background: var(--progress-bg-color);
}
&::-webkit-slider-thumb {
	--thumb-height: 1px;
	--thumb-width: 1px;
	position: relative;
	-webkit-appearance: none;
	width: var(--thumb-width, var(--thumb-height));
	box-shadow: calc(-100vmax - var(--thumb-width, var(--thumb-height))) 0 0
		100vmax var(--progress-color);
}

&::-webkit-slider-runnable-track {
	background: var(--progress-bg-color);
}

/* FF */
&::-moz-range-track {
	width: 100%;
	height: var(--progress-height);
	background: var(--progress-bg-color);
	border: none;
	border-radius: 0px;
}
&::-moz-range-thumb {
	border: none;
	height: 25px;
	width: 25px;
	border-radius: 50%;
	background: transparent;
}
&::-moz-range-progress {
	background-color: var(--progress-color);
	height: var(--progress-height);
}
`;

export const CloseSvg = styled.svg`
width: 17px;
height: 17px;
align-items: center;
margin-left: 80px;
opacity: 0.8;
&:hover{
	opacity: 1;
}
`;
