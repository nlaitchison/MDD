<h2> Add a New Project </h2>
<form class="twelve columns" name="newProject" id-"newProject">
   <!-- <span class="error" ng-show="myForm.title.$error.required">
          Required!</span><br> -->
    <div class="form_input">
		<label> Title </label>
		<input type="text" ng-model="project.title" name="title" id="title" placeholder="Project Title" required />
	</div>
	<div class="form_input">
		<label> Image Folder </label>
		<input type="text"  ng-model="project.imgUrl" name="imgUrl" id="imgUrl"required />
	</div>
	<div class="form_input">
		<label> Short Description</label>
		<textarea ng-model="project.shortDesc" placeholder="Short Description" name="shortDesc" id="shortDesc" required > </textarea>
	</div>
	<div class="form_input">
		<label> Long Description</label>
		<textarea ng-model="project.longDesc" placeholder="Long Description" name="longDesc" id="longDesc" required > </textarea>
	</div>
	<div class="form_button">
		<a href="/"><button ng-click="saveData()">save</button></a>
	</div>
	<div class="clear_fix"></div>
</form>
