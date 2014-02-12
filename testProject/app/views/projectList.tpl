<!--<button ng-click="saveData()">save</button>-->
<div>

<div class="clear_fix"></div>

<article ng-repeat="($id, item) in bands" class="one-third column">
	<a href="#/detail/{{$id}}"><img ng-src="{{item.imgUrl}}" alt="{{item.title}}"/>
		<div class="artist_list_info">
			<h2> {{item.title}} </h2>
			<p> {{item.shortDesc}} </p>
		</div>
	</a>
</article>

<div>