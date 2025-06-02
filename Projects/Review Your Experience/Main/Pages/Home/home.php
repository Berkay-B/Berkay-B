<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="../Home/home.css">
    <title>Project</title>
</head>
<body>
    <div class="wrapper">
        <div class="a">
            <div class="navigation">
                <a class="nav-home" href="../Home/home.php">Home</a>
                <a class="nav-contact" href="../Contact/contact.php">Contact</a>
                <a class="nav-about-us" href="../About%20Us/about-us.php">About Us</a>
            </div>
        </div>

        <?php
        try {
            $db = new PDO("mysql:host=localhost;dbname=games_reviews1", "root", "");
        }
        catch(PDOException $e) {
            die("Error!:".$e->getMessage());
        }

        $query = $db->prepare("SELECT * FROM category");
        $query->execute();
        $category = $query->fetchAll(PDO::FETCH_ASSOC);
        ?>

        <?php
        // This function retrieves the images I added to the database based on their names and displays them on the website
        function getCategoryLogo($categories, $name) {
            foreach ($categories as $cat) {
                if ($cat['category-name'] === $name) {
                    return "<img src='../" . $cat['logo_path'] . "' alt='$name Logo' class='category-logo'>";
                }
            }
            return ""; // if the category doesnt exist, the function returns nothing
        }
        ?>

        <div class="action">
            <a href="Game%20Categories/game-categories.php?category=Action" class="category-logo">
                <?php echo getCategoryLogo($category, 'Action'); ?>
            </a>
        </div>

        <div class="adventure">
            <a href="Game%20Categories/game-categories.php?category=Adventure" class="category-logo">
                <?php echo getCategoryLogo($category, 'Adventure'); ?>
            </a>
        </div>

        <div class="rpg">
            <a href="Game%20Categories/game-categories.php?category=RPG" class="category-logo">
                <?php echo getCategoryLogo($category, 'RPG'); ?>
            </a>
        </div>

        <div class="simulator">
            <a href="Game%20Categories/game-categories.php?category=Simulator" class="category-logo">
                <?php echo getCategoryLogo($category, 'Simulator'); ?>
            </a>
        </div>

        <div class="strategy">
            <a href="Game%20Categories/game-categories.php?category=Strategy" class="category-logo">
                <?php echo getCategoryLogo($category, 'Strategy'); ?>
            </a>
        </div>

        <div class="survival">
            <a href="Game%20Categories/game-categories.php?category=Survival" class="category-logo">
                <?php echo getCategoryLogo($category, 'Survival'); ?>
            </a>
        </div>

        <div class="horror">
            <a href="Game%20Categories/game-categories.php?category=Horror" class="category-logo">
                <?php echo getCategoryLogo($category, 'Horror'); ?>
            </a>
        </div>

        <div class="fps">
            <a href="Game%20Categories/game-categories.php?category=FPS" class="category-logo">
                <?php echo getCategoryLogo($category, 'FPS'); ?>
            </a>
        </div>

        <div class="j">
            <div class="footer">Project Van Berkay & Ibrahim &copy;</div>
        </div>
    </div>
</body>
</html>

