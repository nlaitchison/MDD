<!--<button ng-click="saveData()">save</button>-->

<article ng-repeat="item in remoteData.bands" class="one-third column">
	<a href="#/detail/{{item.id}}"><img src="images/{{item.imgUrl}}" alt="Enter Shikari"/>
		<div class="artist_list_info">
			<h2> {{item.title}} </h2>
			<p> {{item.shortDesc}} </p>
		</div>
	</a>
</article>
