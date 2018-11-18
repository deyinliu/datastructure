#include "iostream"
using namespace std;
int main(){
    int n, k, i = 2;
    int b[3] = {0, 0, 0};
    cin >> n;
    while(n>0){
        k = n % 10;
        b[i--] = k;
        n = n / 10;
    }
    for(int i = 0; i < b[0]; i++){
        cout << "B";
    }
    for(int i = 0; i < b[1]; i++){
        cout << "S";
    }
    for(int i = 0; i < b[2]; i++){
        cout << i+1;
    }
    return 0;
}