// Created for the Footer HTML Box to add a custom drop-down menu such so that users could choose "web," "mobile," or "desktop," 
// which would then be added as a tag to the topic.

  jQuery(".tags").insertBefore(".additional_detail");
  jQuery(".tags").html('<div class="tags validatable"><label class="translate" for="topic_tags"  style="display: inline-block; padding-right: 20px;">Please choose web, mobile, or desktop:</label><select id="topic_keywords" name="topic[keywords]" style="width: 125px; height: 30px; border-radius: 3px;"><option value="web">Web</option><option value="mobile">Mobile</option><option value="desktop">Desktop</option></div>');
