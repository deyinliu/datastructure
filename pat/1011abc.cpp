#include "iostream"
using namespace std;
int main(){
    long long int a , b , c;
    int t;
    cin >> t;
    for(int i = 0; i < t; i++){
        cin >> a >> b >> c;
        if(a + b > c){
            printf("Case #%d: %s\n", i + 1, a + b > c ? "true" : "false");
        }else{
            printf("Case #%d: %s\n", i + 1, a + b > c ? "true" : "false");
        }
    }
    return 0;
}