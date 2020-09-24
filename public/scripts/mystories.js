function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

const createStoryElement = function(storyData) {
  console.log('storydata', storyData);
  let $story = $('<article>').addClass('story');
  let $storyHeader = $(`
  <article class="storyheader">
    <p class="title"><a href="/stories/${storyData.story_id}">${storyData.title || 'No stories yet'}</a></p>
  </article>`);
  let $text = $('<p>').addClass('storytext').text(storyData.text);
  let $footer;
  if (storyData.status === 'open') {
    $footer = $(`
    <footer class="footer">
        <span class="status">Open to Contributions ✍</span>
    </footer>`);
  } else if (storyData.status === 'closed') {
    $footer = $(`
    <footer class="footer">
        <span class="status">Currently Closed to Contributions</span>
    </footer>`);
  } else if (storyData.status === 'complete') {
    $footer = $(`
    <footer class="footer">
        <span class="status">A Complete Story! Have a Read 🤓!</span>
    </footer>`);
  }
  $story.append($storyHeader, $text, $footer);
  return $story;
};

const createUserElement = function(storyData) {
  console.log(storyData);
  let avatarURL = storyData.avatar.substring(0, storyData.avatar.indexOf('?'));
  avatarURL += '?size=100x100&set=set1';
  const $userDiv = $('<div>').attr('id', 'user-info');
  const $userHandle = $('<div>').attr('id', 'user-handle').text(storyData.name);
  const $userAvatar = $('<img>').attr('src', avatarURL);
  $userDiv.append($userAvatar, $userHandle);
  return $userDiv;
};

const renderStories = function(stories) {
  for (const story of stories) {
    let $story = createStoryElement(story);
    $('#stories').prepend($story);
  }
  let $userInfo = createUserElement(stories[0]);
  $('#stories').prepend($userInfo);
};

const loadStories = function() {
  const authorid = $("#page-data").attr("data-authorid");

  $.ajax('../../api/stories/user/' + authorid, { method: 'GET' })
    .then(function(response) {
      console.log('Ajax response:', response);
      renderStories(response.stories);
    });
};

$(document).ready(() => {
  loadStories();
});
