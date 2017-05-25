import React from 'react';
import Label from '../../components/Label';
import ColorPicker from './ColorPicker';
import {
  Detail,
  HeadSection,
  HeadWrapper,
  Name,
  CircleButton,
  TopLine,
  LabelWrapper,
  BottomLine,
  Price,
  PhotoSection,
  BigPhotoWrapper,
  BigPhoto,
  Previews,
  Photo,
  DescriptionSection,
  TextAccent,
  BuyNowButton,
} from './styled';

export default () => (
  <Detail>
    <HeadSection>
      <HeadWrapper>
        <Name>
          ULTRA <br />BOOST
        </Name>
        <CircleButton>
          Save
        </CircleButton>
      </HeadWrapper>
      <HeadWrapper>
        <TopLine>
          <ColorPicker />
          <LabelWrapper>
            <Label />
          </LabelWrapper>
        </TopLine>
        <BottomLine>
          <Price>170$</Price>
        </BottomLine>
      </HeadWrapper>
    </HeadSection>
    <PhotoSection>
      <BigPhotoWrapper>
        <BigPhoto src={require('./photos/bitmap-copy.png')} alt="" />
      </BigPhotoWrapper>
      <Previews>
        {' '}
        <Photo src={require('./photos/bitmap_2.png')} alt="" />
        <Photo src={require('./photos/bitmap.png')} alt="" />
        <Photo src={require('./photos/bitmap_3.png')} alt="" />
        <Photo src={require('./photos/bitmap-copy-2.png')} alt="" />
      </Previews>
    </PhotoSection>
    <DescriptionSection>
      <p>
        {' '}
        <TextAccent>Adidas </TextAccent>
        is a German multinational corporation, headquartered in Herzogenaurach,
        Germany, that designs and manufactures shoes, clothing and accessories.
        {' '}
      </p>
    </DescriptionSection>
    <BuyNowButton>Buy now</BuyNowButton>
  </Detail>
);
