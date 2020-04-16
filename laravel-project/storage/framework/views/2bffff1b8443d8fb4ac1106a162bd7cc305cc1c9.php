<?php $__env->startSection('content'); ?>
<div class='content'>
    <div class = 'title'>
    <h2>
        <?php echo e($articles->title); ?>

    </h2>
    </div>
    <?php echo $articles->body; ?>

    <p>
        <?php $__currentLoopData = $articles->tags; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $tag): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
            <a href="<?php echo e(route('articles.index',['tag'=> $tag->name])); ?>">
                <?php echo e($tag -> name); ?>

            <a>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
    </p>
</div>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layout', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>