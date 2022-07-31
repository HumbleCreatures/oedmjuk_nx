import styled from 'styled-components';

const StickyHeaderContainer = styled.div`
  position: sticky;
  top: 0;
  background-color: #fff000;
  height: 50px;
`
const MainContainer = styled.div`
  background-color: #ff00ff;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

`

const SpacesContainer = styled.div`
  background-color: #0ff0ff;
`

const FeedContainer = styled.div`
  background-color: #f00fff;
  flex-grow: 1;
`

const ContentContainer = styled.div`
  background-color: #0000ff;
`

export const MainLayoutView = () => {
  return (<div>
    <StickyHeaderContainer>Hello world</StickyHeaderContainer>
    <MainContainer>
      <SpacesContainer>
        Spaces goes here
      </SpacesContainer>
      <FeedContainer>
        Feed container goes here
      </FeedContainer>
      <ContentContainer>
        Here content and other things might show up
      </ContentContainer>
    </MainContainer>
  </div>);
 }
