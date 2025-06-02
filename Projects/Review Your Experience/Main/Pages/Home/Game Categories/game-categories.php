<?php
try {
    $db = new PDO("mysql:host=localhost;dbname=games_reviews1", "root", "");
} catch (PDOException $e) {
    die("Error!:" . $e->getMessage());
}

$categoryName = $_GET['category'] ?? '';

if (!$categoryName) {
    echo "ENG:Category name is not specified. TR:Kategori adı belirtilmemiş.";
    exit;
}

// Get category ID from the name
$stmt = $db->prepare("SELECT id FROM category WHERE `category-name` = :name");
$stmt->execute(['name' => $categoryName]);
$category = $stmt->fetch(PDO::FETCH_ASSOC);

if (!$category) {
    echo "Category not found.";
    exit;
}

// Get games belonging to the category
$stmt = $db->prepare("SELECT * FROM games WHERE category_id = :category_id");
$stmt->execute(['category_id' => $category['id']]);
$games = $stmt->fetchAll(PDO::FETCH_ASSOC);
?>

<!-- -------------------HTML------------------- -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title><?php echo htmlspecialchars($categoryName); ?> Games</title>
    <link rel="stylesheet" href="../Home/home.css">
</head>
<body>
<div class="wrapper">
    <h1><?php echo htmlspecialchars($categoryName); ?> Games</h1>

    <?php if (count($games) > 0): ?>
        <ul>
            <?php foreach ($games as $game): ?>
                <li style="margin-bottom: 20px;">
                    <strong><?php echo htmlspecialchars($game['game-name']); ?></strong><br>
                    <p><?php echo htmlspecialchars($game['game-description']); ?></p>
                    <p><strong>Price:</strong> $<?php echo $game['game-price ($)']; ?></p>
                </li>
            <?php endforeach; ?>
        </ul>
    <?php else: ?>
        <p>No games found in this category.</p>
    <?php endif; ?>

    <a href="../home.php">Back to Home</a>
</div>
</body>
</html>
