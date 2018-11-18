#include "iostream"
using namespace std;
int main()
{
    int min = 101;
    int max = -1;
    int n, score;
    cin >> n;
    string stuName, stuNum, minName, minNum, maxName, maxNum;
    for(int i = 0; i < n; i++)
    {
        cin>> stuName >> stuNum >> score;
        if(score > max){
            max = score;
            maxName = stuName;
            maxNum = stuNum;
        }
        if(score < min){
            min = score;
            minName = stuName;
            minNum = stuNum;
        }
    }
    cout << maxName << " " << maxNum << endl;
    cout << minName << " " << minNum << endl;
    return 0;
}