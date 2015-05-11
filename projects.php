<?php
/*
Template Name: projects page
*/

get_header(); ?>


<div id="main-content" class="main-content">
	<section id="projects_block">
		<?php
		    $mypost = array( 'post_type' => 'portfolio', 'orderby' => 'date', 'order'   => 'DESC',);
		    $loop = new WP_Query( $mypost );
	    ?>

	    <?php while ( $loop->have_posts() ) : $loop->the_post();?>
        <article id="post-<?php the_ID(); ?>" class="individual-project" <?php post_class(); ?>>
        	<h1><?php the_title(); ?></h1><a href="#" class="more_link SeeMore2">{See More}</a>
        	<div class="firstImage"></div>
        	<div class="imageBlock">
	        	<?php
					foreach(get_images_src('large','false') as $k => $i){
					echo '<img src="'.$i[0].'" width="'.$i[1].'" height="'.$i[2].'" />';
					}
				?>
			</div>
            <p><?php echo get_post_meta( $post->ID, '_cmb2_portfolio_description', true ); ?></p>    
  		</article>
    	<?php endwhile; ?>
	</section>
</div><!-- #main-content -->
<?php wp_reset_query(); ?>
<?php get_footer(); ?>
