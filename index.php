<?php
/**
 * @package WordPress
 * @subpackage restorationcreek
 */

get_header(); ?>


<div id="main-content" class="main-content">
	<div id="home_rotate">
		<?php
			foreach(get_images_src('large','false') as $k => $i){
			echo '<img src="'.$i[0].'" width="'.$i[1].'" height="'.$i[2].'" />';
			}
		?>
	</div>


	<?php
			if ( have_posts() ) :
				// Start the Loop.
				while ( have_posts() ) : the_post();

					the_content();

				endwhile;
				

			else :
				// If no content, include the "No posts found" template.
				get_template_part( 'content', 'none' );

			endif;
		?>
</div><!-- #main-content -->

<?php get_footer(); ?>
