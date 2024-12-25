import cv2
from ultralytics import YOLO
import firebase_admin
from firebase_admin import credentials
from firebase_admin import db 


model = YOLO("C:/Users/Ouday/Desktop/final/best.pt")


cred = credentials.Certificate('C:/Users/Ouday/Desktop/final/serciveaccount.json')
firebase_admin.initialize_app(cred, {'databaseURL': 'https://project1-93792-default-rtdb.firebaseio.com/'})
ref = db.reference('py/')

window_width = 800  
window_height = 600  

def traiter_image(image_path, variable_name):
    image = cv2.imread(image_path)
    if image is None:
        print(f"Erreur de chargement de l'image {image_path}.")
        return 0
    results = model.predict(source=image, conf=0.2, show=False, verbose=False)
    detections = results[0].boxes
    vehicle_count = len(detections.xyxy)
    for box in detections.xyxy:
        x1, y1, x2, y2 = map(int, box)
        cv2.rectangle(image, (x1, y1), (x2, y2), (0, 255, 0), 2)
        cv2.putText(image, "Vehicle", (x1, y1 - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (255, 0, 0), 2)
        
    image_resized = cv2.resize(image, (window_width, window_height))
    ref.update({variable_name: vehicle_count})
    cv2.imshow(f'Détection - {variable_name}', image_resized)
    return vehicle_count

image2_path = "C:/Users/Ouday/Desktop/final/autoroute-belgique.jpg"
image1_path ="C:/Users/Ouday/Desktop/final/ambou.jpg"
count1 = traiter_image(image1_path, 'image1')
count2 = traiter_image(image2_path, 'image2')
print(f"Le nombre de véhicules dans l'image 1 est: {count1}")
print(f"Le nombre de véhicules dans l'image 2 est: {count2}")
cv2.waitKey(0)
cv2.destroyAllWindows()