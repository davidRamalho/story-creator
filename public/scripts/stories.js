const sampleStories = { stories: [
  { userId: 1, title: 'Midnight\'s Children' },
  { userId: 1, title: 'The Crying of Lot 49' },
  { userId: 2, title: 'Oryx and Crake' }
]};

const createStoryElement = function(storyData) {
  console.log(storyData)
  let $story = $('<article>').addClass('story');
  let $storyHeader = $(`
  <article class="storyheader">
    <div id="author">
    <span id="avatar"><img src=${storyData.avatar}></span>
    <span id="handle">${storyData.name}</span>
    </div>
    <p class="title"><a href="/stories/${storyData.story_id}">${storyData.title}</a></p>
  </article>`);
  let $text = $('<p>').addClass('storytext').text(storyData.text);
  let $footer = $(`
    <footer class="footer">
      <span class="status">${storyData.status}</span>
    </footer>`);
  $story.append($storyHeader, $text, $footer);
  return $story;
};

// const createStoryElement = function(storyData) {
//   let $story = $('<article>').addClass('story');
//   let $title = $('<div>').addClass('title').text(storyData.title);
//   $story.append($title);
//   return $story;
// };

const renderStories = function(stories) {
  for (const story of stories) {
    let $story = createStoryElement(story);
    $('#stories').prepend($story);
  }
};

const loadStories = function() {
  $.ajax('../api/stories', { method: 'GET' })
    .then(function(response) {
      renderStories(response.stories);
    });
};

$(document).ready(() => {
  loadStories();
});
