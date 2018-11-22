#include "iostream"
using namespace std;
int main(){
    int a1=0,a2=0,a3=0,a5=0,sum=0,flag = 1;
    float a4 = 0.0f;
    int n , k;
    cin >> n;
    for(int i = 0; i < n; i++){
        cin >> k;
        if(k % 5 == 0 && k % 2 == 0){
            a1 += k;
        }
        if(k % 5 == 1){
            if(flag % 2 == 1){
                a2 += k;
            }else{
                a2 -= k;
            }
            flag++;
        }
        if(k % 5 == 2) a3++;
        if(k % 5 == 3){
            sum++;
            a4 += k; 
        } 
        if(k % 5 == 4){
            if(k > a5){
                a5 = k;
            }
        }
    }
    if(a1 > 0){
        printf("%d " , a1);
    }else{
        printf("N ");
    }
    if(a2 > 0){
        printf("%d " , a2);
    }else{
        printf("N ");
    }
    if(a3 > 0){
        printf("%d " , a3);
    }else{
        printf("N ");
    }
    if(a4 > 0){
        printf("%.1f " , a4/sum);
    }else{
        printf("N ");
    }
    if(a5 > 0){
        printf("%d " , a5);
    }else{
        printf("N ");
    }
    return 0;
}